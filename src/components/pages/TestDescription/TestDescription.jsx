import React from "react";
import styles from "./testDescription.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDescriptionTest } from "../../../feateures/testsSlice";
import { useSelector } from "react-redux";
import Header from "../../Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { fetchTests } from "../../../feateures/testsSlice";

const TestDescription = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const test = useSelector((state) => state.test.tests);

  useEffect(() => {
    dispatch(fetchTests(id));
  }, [dispatch, id]);

  console.log(test);

  return (
    <div className="test-desctiption">
      <Header />
      {test.map((item) => {
        if (item._id === id) {
          return (
          <div className="test_info">
            <div className="test_name">{item.testName}</div>
            <div className="test_description">{item.description}</div>
            <button>Начать тест</button>
          </div>
        );
        }
      })}
      <Footer />
    </div>
  );
};

export default TestDescription;
