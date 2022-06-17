import React from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchTests } from "../../../feateures/testsSlice";
import { useParams } from "react-router-dom";
import Test from "./Test";

const TestPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTests(id));
  }, [dispatch, id]);

  const tests = useSelector((state) => state.test.tests);

  return tests.map((test) => {
    if (test._id === id) {
      return <Test key={test._id} test={test} answers={test.questions} />;
    }
  });
};

export default TestPage;
