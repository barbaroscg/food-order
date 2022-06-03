import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFoods } from '../actions/foodActions';
import Foods from '../components/Foods';
import foods from '../fooddata';

function Homepage() {
  const dispatch = useDispatch();

  const foodsstate = useSelector((state) => state.getAllFoodsReducer);

  const { foods, error, loading } = foodsstate;

  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  console.log("Foods'un tipi nedir?" + typeof foods);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading..</h1>
        ) : error ? (
          <h1> Something went wrong..</h1>
        ) : (
          foods.map((food) => (
            <div className="col-md-4" key={food._id}>
              <Foods food={food} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Homepage;
