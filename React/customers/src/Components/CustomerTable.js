import { Table, Space, Button, Popconfirm } from 'antd';
import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Customer from './Customer';
import CustomerEdit from './CustomerEdit';

export default class CustomerTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //data pro sloupce tabulky
            columns: [
                {
                    title: 'Id',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Surname',
                    dataIndex: 'surname',
                    key: 'surname',
                },
                {
                    title: 'Country',
                    dataIndex: 'country',
                    key: 'country',
                },
                {
                    title: 'Phone',
                    dataIndex: 'phone',
                    key: 'phone',
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (record) => (
                        <Space size="middle">
                            <Popconfirm title="Sure to edit?" onConfirm={() => this.onPressEdit(record.id, record.name, record.surname, record.country, record.phone)}>
                                <Button type="primary" shape="round" icon={<EditOutlined />} style={{ width: "100px" }}>Edit</Button>
                            </Popconfirm>

                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onPressDelete(record.id)}>
                                <Button type="primary" danger shape="round" icon={<DeleteOutlined />} style={{ width: "100px" }}>Delete</Button>
                            </Popconfirm>

                        </Space>
                    ),
                },
            ],
            //slouží pro přepínání zobrazených tlačítek
            editCustomer: false,
            //pro editaci zákazníka
            id: 0,
            customer: null
        };

        this.addCustomer = this.addCustomer.bind(this);
        this.onPressDelete = this.onPressDelete.bind(this);
        this.onPressEdit = this.onPressEdit.bind(this);
        this.onPressConfirmEdit = this.onPressConfirmEdit.bind(this);

    }

    async addCustomer(name, surname, country, phone) {
        this.props.onCreate(name, surname, country, phone);
    }

    async onPressDelete(args) {
        this.props.onRemove(args);
    }

    //Přepnu state, aby se vyměnily tlačítka a pošlu data do CustomerEdit
    async onPressEdit(id, name, surname, country, phone) {
        let a = [];
        a.push(name, surname, country, phone);
        this.setState({ editCustomer: true, id: id, customer: a });
    }

    //Přijmu data zpátky z CustomerEdit a přepošlu je k úpravě zákazníka do ReadAPI, aby se následně poslaly na server
    //Prohodím opět state, aby se vyměnily tlačítka
    async onPressConfirmEdit(name, surname, country, phone) {
        this.props.onEdit(this.state.id, name, surname, country, phone);
        this.setState({ editCustomer: false });
    }

    render() {
        return (
            <div>
                {this.state.editCustomer === false ? <Customer onCreate={this.addCustomer}></Customer> : <CustomerEdit onEdit={this.onPressConfirmEdit} data={this.state.customer} ></CustomerEdit>}
                <Table dataSource={this.props.data} columns={this.state.columns} rowKey="id" pagination={false} style={{ width: "1000px" }} />
            </div>
        )
    }
}