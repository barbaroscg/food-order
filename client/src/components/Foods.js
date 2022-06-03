import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../actions/cartActions';

function Foods({ food }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addtoCart(food, quantity, varient));
  }

  return (
    <div className="bg-light mt-5 shadow-lg p-3 ">
      <div onClick={handleShow}>
        <h1 className="pt-5">{food.name}</h1>
        <img src={food.img} className="img-fluid" style={{ height: '200px' }} />
      </div>

      <div className="flex-container">
        <div className="w-100">
          <p>Varients</p>

          <select
            className="form-select"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {food.varient.map((varients) => (
              <option value={varients}>{varients}</option>
            ))}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity</p>
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100 mt-3">
          <h1>Price: {food.prices[0][varient] * quantity}</h1>
        </div>
        <div className="m-1 w-100 mt-2">
          <button className="btn" onClick={addtocart}>
            Sepete Ekle
          </button>
        </div>
      </div>

      {/*Burası İkinci Kısım Modal kurulumuna geçiyoruz react-bootstrap kurup*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={food.img}
            className="img-fluid"
            style={{ height: '300px' }}
          />
          <h1>Kategori: {food.category}</h1>
          <p>{food.desc}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Kapat
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Foods;
