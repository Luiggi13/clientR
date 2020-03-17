import React, { useState, useEffect } from "react";
import { Switch, List, Button, notification, Modal as ModalAntd } from "antd";
import { EditOutlined, StopOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Modal from "../../../Modal";
import DragSortableList from 'react-drag-sortable';
import { updateMenuApi, activateMenuApi, deleteMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import AddMenuWebForm from "../AddMenuWebForm";
import EditMenuWebForm from "../EditMenuWebForm";
import "./MenuWebList.scss";

const { confirm } = ModalAntd;


export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb} = props;
    const [listItems, setListItems] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    
    useEffect(() => {
        const lisItemsArray = [];
        menu.forEach(item => {
            lisItemsArray.push({
            content: (
                <MenuItem item={item} deleteMenu={deleteMenu} activateMenu={activateMenu} editMenuWebModal={editMenuWebModal} />
            )
            })
        });
        setListItems(lisItemsArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menu])
    
    const activateMenu = (menu, status) => {
        const accessToken = getAccessTokenApi();
        activateMenuApi(accessToken, menu._id, status).then( response => {
            notification["success"]({
                message: response
            });
        })
    }

    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(item => {
            const { _id } = item.content.props.item;
            const order = item.rank;

            updateMenuApi(accessToken, _id, {order} );
        })
    }

    const addMenuWebModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Creando nuevo menú");
        setModalContent(
            <AddMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
            />
        )
    }

    const editMenuWebModal = menu => {
        setIsVisibleModal(true);
        setModalTitle(`Editando menu: ${menu.title}`);
        setModalContent(
          <EditMenuWebForm
            setIsVisibleModal={setIsVisibleModal}
            setReloadMenuWeb={setReloadMenuWeb}
            menu={menu}
          />
        );
      };

      // delete
      const deleteMenu = menu => {
        const accessToken = getAccessTokenApi();
console.log(menu);
        confirm({
          title: "Eliminando usuario",
          content: `¿Estás seguro que quiere eliminar a ${menu.title}?`,
          okText: "Eliminar",
          okType: "danger",
          cancelText: "Cancelar",
          onOk() {
            deleteMenuApi(accessToken, menu._id)
              .then(response => {
                notification["success"]({
                  message: response
                });
                setReloadMenuWeb(true);
              })
              .catch(err => {
                notification["error"]({
                  message: err
                })
              })
          }
        })
      }
      // delete

    return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary" onClick={addMenuWebModal}>
                <PlusOutlined /> Nuevo menú
                </Button>
            </div>
            <div className="menu-web-list__items">
                <DragSortableList items={listItems} onSort={onSort} type="vertical"
                />
            </div>
            <Modal title={modalTitle} isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
                {modalContent}
            </Modal>
        </div>
    )
}

function MenuItem(props) {
    const { item, activateMenu, editMenuWebModal, deleteMenu } = props;
    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active} onChange={ e => activateMenu(item, e)} />,
                <Button type="primary" onClick={() => editMenuWebModal(item)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={ () => deleteMenu(item)}>
                <DeleteOutlined />
            </Button>
            ]}
        >
            <List.Item.Meta title={item.title} description={item.url} />
        </List.Item>
    )
}