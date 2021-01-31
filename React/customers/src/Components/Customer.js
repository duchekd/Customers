import { Input, Space, Button } from 'antd';
import React from 'react';

export default class Customer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addCustomer: false,
            name: "",
            surname: "",
            country: "",
            phone: ""
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onPressAdd = this.onPressAdd.bind(this);

    }

    onChangeName(args) {
        this.setState({ name: args.target.value })
    }

    onChangeSurname(args) {
        this.setState({ surname: args.target.value })
    }

    onChangeCountry(args) {
        this.setState({ country: args.target.value })
    }

    onChangePhone(args) {
        this.setState({ phone: args.target.value })
    }

    async onPressAdd() {
        this.setState({ addCustomer: !this.state.addCustomer });
        if (this.state.addCustomer === true) {
            this.props.onCreate(this.state.name, this.state.surname, this.state.country, this.state.phone);
            this.setState({ name: "", surname: "", phone: "", country: "" });
        }
    }

    render() {

        return (
            <div>
                {this.state.addCustomer === true ? <Button type="primary" danger shape="round" onClick={this.onPressAdd}  >Confirm</Button> : <Button type="primary" shape="round" onClick={this.onPressAdd} /*style={{ marginTop: "20px" }}*/ >Add Customer</Button>}
                <div></div>
                {this.state.addCustomer === true ?
                    <Space size="middle" style={{ marginTop: "20px" }}>
                        <label style={{}}>Name:</label>
                        <Input style={{ width: "150px" }} onChange={this.onChangeName}></Input>

                        <label style={{}}>Surname:</label>
                        <Input style={{ width: "150px" }} onChange={this.onChangeSurname}></Input>

                        <label style={{}}>Country:</label>
                        <Input style={{ width: "150px" }} onChange={this.onChangeCountry}></Input>

                        <label style={{}}>Phone:</label>
                        <Input style={{ width: "150px" }} onChange={this.onChangePhone}></Input>
                    </Space> : ""}
            </div>
        )
    }
}