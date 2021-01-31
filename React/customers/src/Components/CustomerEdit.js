import { Input, Space, Button } from 'antd';
import React from 'react';

export default class CustomerEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.data[0],
            surname: this.props.data[1],
            country: this.props.data[2],
            phone: this.props.data[3]
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onPressConfirm = this.onPressConfirm.bind(this);
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

    onPressConfirm() {
        this.props.onEdit(this.state.name, this.state.surname, this.state.country, this.state.phone);
        this.setState({ name: "", surname: "", country: "", phone: "" });
    }

    render() {

        return (
            <div>
                {/* {this.state.editCustomer === true ? <Button type="primary" danger shape="round" onClick={this.onPressConfirm}  >Confirm</Button> : ""} */}
                <Button type="primary" danger shape="round" onClick={this.onPressConfirm}  >Confirm</Button>
                <div></div>
                <Space size="middle" style={{ marginTop: "20px" }}>
                    <label style={{}}>Name:</label>
                    <Input style={{ width: "150px" }} onChange={this.onChangeName} defaultValue={this.props.data[0]}></Input>

                    <label style={{}}>Surname:</label>
                    <Input style={{ width: "150px" }} onChange={this.onChangeSurname} defaultValue={this.props.data[1]}></Input>

                    <label style={{}}>Country:</label>
                    <Input style={{ width: "150px" }} onChange={this.onChangeCountry} defaultValue={this.props.data[2]}></Input>

                    <label style={{}}>Phone:</label>
                    <Input style={{ width: "150px" }} onChange={this.onChangePhone} defaultValue={this.props.data[3]}></Input>
                </Space>
            </div>
        )
    }
}