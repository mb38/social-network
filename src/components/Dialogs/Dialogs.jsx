import React from 'react';
import {Row, Col} from 'antd';
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map( d => <DialogItem id={d.id} key={d.id} name={d.name} /> );

    let messagesElements = state.messages
        .map( m => <Message message={m.message} key={m.id}/>);

    let newMessageBody = state.newMassageBody;

    let onSendMessageBody = () => {
        props.sendMessageCreator();
    }

    let newMessageChange = (elem) => {
        let body = elem.target.value;
        props.updateNewMessageBody(body);
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
                        <textarea value={newMessageBody}
                                  onChange={newMessageChange}
                                  className={classes['text']}
                                  placeholder='Enter your message'/>
                        <button onClick={onSendMessageBody} className={classes['btn']}>Send</button>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Dialogs;