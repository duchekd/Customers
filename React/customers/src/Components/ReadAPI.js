import axios from 'axios';
import React from 'react';
import CustomerTable from './CustomerTable';
// import { Button, Grid, Input, Table } from 'antd';

const url = "http://localhost:5000/api/customers";
const t0 = "?Id=";
const t01 = "?Name=";
const t1 = "&Name=";
const t2 = "&Surname=";
const t3 = "&Country=";
const t4 = "&Phone=";

export default class ReadAPI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customersList: null,
        };

        this.loadData = this.loadData.bind(this);
        this.removeData = this.removeData.bind(this);
        this.addData = this.addData.bind(this);
        this.editData = this.editData.bind(this);
    }

    async componentDidMount() {
        await this.loadData();
    }

    //Načtení seznamu zákazníků
    async loadData() {
        let response = await axios.get(url);

        this.setState({ customersList: response.data });
    }
    //Odstranit zákazníka
    async removeData(id) {
        let response = await axios.delete(url + t0 + id);
        this.loadData();
        return response.data;
    }

    //Vytvořit nového zákazníka
    async addData(name, surname, country, phone) {
        let response = await axios.put(url + t01 + name + t2 + surname + t3 + country + t4 + phone);
        this.loadData();
        return response.data;
    }

    //Upravit existujícího zákazníka
    async editData(id, name, surname, country, phone) {
        let response = await axios.post(url + t0 + id + t1 + name + t2 + surname + t3 + country + t4 + phone);
        this.loadData();
        return response.data;
    }

    render() {
        return <div>
            {this.state.customersList !== null ? <CustomerTable onCreate={this.addData} onRemove={this.removeData} onEdit={this.editData} data={this.state.customersList}></CustomerTable> : ""}
        </div>
    }
}