import axios from "axios";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup"
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdDelete } from "react-icons/md";

export default function TodoList({ todos = [], setTodos }){
    const renderListGroupItem = (t) => {
        return <ListGroup.Item key={t.id} className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center">
                <span style={{ marginRight: "12px", cursor: "pointer" }}
                    onClick={() => {handleUpdate(t.id, { completed: !t.completed })}}>
                    {t.completed === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                </span>
                <span> {t.name} </span>
            </div>
            <div>
                <MdEdit style={{cursor: "pointer", marginRight: "12px"}} />
                <MdDelete style={{cursor: "pointer"}} />
            </div>
        </ListGroup.Item>
    }

    const handleUpdate = async (id, value) => {
        return axios.patch(`/api/todos/${id}/`, value).then((res) => {
            const {data} = res;
            const newTodos = todos.map(t => {
                if (t.id === id) return data;
                else return t;
            })
            setTodos(newTodos);
        }).catch(() => { alert("Something went wrong!") })
    }

    return <div>
        <ListGroup>
            {todos.map(renderListGroupItem)}
        </ListGroup>
        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormControl value={""} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={null}>
                    Close
                </Button>
                <Button variant="primary" onClick={null}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}