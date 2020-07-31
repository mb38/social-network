import React from 'react';
import {Row, Col} from 'antd';
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validations/validators";

function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map( d => <DialogItem id={d.id} key={d.id} name={d.name} /> );

    let messagesElements = state.messages
        .map( m => <Message message={m.message} key={m.id}/>);


    let addNewMessage = (values) => {
        props.sendMessageCreator(values.newMessageBody)
    }

    return (
        <Row>
            <Col lg={4}>
                <div className={classes['dialog-item']}>
                    {dialogsElements}
                </div>
            </Col>
            <Col lg={20}>
                <div className={classes['dialog-item']}>
                    {messagesElements}
                    <div className={classes['dialog-item-add']}>
                        <AddMessageFormRedux onSubmit={addNewMessage} />
                    </div>
                </div>
            </Col>
        </Row>
    );
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes['form-container']}>
            <Field component={Textarea}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}
                   validate={[required, maxLength100]}
            />
            <button className={classes['btn']}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)

export default Dialogs;

