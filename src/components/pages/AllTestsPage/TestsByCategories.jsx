import React from "react";
import { useEffect } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestsByCategoryId } from "../../../feateures/testsSlice";
import { fetchTests } from "../../../feateures/testsSlice";
import { fetchCategories } from "../../../feateures/testsSlice";
// import { fetchTestsByCategoryId } from "../../../feateures/testsSlice";
import { fetchAddToFavorite } from "../../../feateures/testsSlice";
import { BsBookmark } from 'react-icons/bs';
import './index.css';
import Header from '../../Header';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestsByCategories = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const categories = useSelector((state) => state.test.categories);
  const user = useSelector((state) => state.profile.user);
//   const favorite = useSelector((state) => state.test);

  

console.log(user);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTests());
  }, [dispatch, id]);

  const handleAddFavorite = (id) => {
    dispatch(fetchAddToFavorite(id))
  }

  useEffect(() => {
    dispatch(fetchTestsByCategoryId(id));
  }, [dispatch, id]);

  const testsByCat = useSelector((state) => state.test.testsByCat);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }
  
  return (
    <>
    <Header />
    <div className="tests_wrap">
      <div className="all_categories">
        <Slider {...settings} className='slider_track'>
        {categories.map((category) => {
          return (
            <div className="cat_wrapper">
            <NavLink key={category._id} to={`/category/${category._id}`} className='nav_link'>
              {category.title}
            </NavLink>
            </div>
          );
        })}
        </Slider>
      </div>
      <div className="all_tests">
        {testsByCat.map((test) => {
          return (
            <div key={test._id} className="test_name">
              <Link to={`/testdescription/${test._id}`} className='tests_link'>
                {test.testName}
              </Link>
                <BsBookmark className="star" onClick={() => handleAddFavorite(test._id)}/>
            </div>
          );
        })}
      </div>
    </div>
    </>
  )
  
};

export default TestsByCategories;
