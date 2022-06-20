import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTests } from "../../../feateures/testsSlice";
import { fetchCategories } from "../../../feateures/testsSlice";
// import { fetchTestsByCategoryId } from "../../../feateures/testsSlice";
import { fetchAddToFavorite } from "../../../feateures/testsSlice";
import "./index.css";
import { BsBookmark } from 'react-icons/bs';
import Header from '../../Header';
import Slider from 'react-slick';
import { profileFetch } from '../../../feateures/profileSlice';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AllTestsPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const categories = useSelector((state) => state.test.categories);
  const tests = useSelector((state) => state.test.tests);
  const user = useSelector((state) => state.profile.user);
//   const favorite = useSelector((state) => state.test);

console.log(user);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTests());
    dispatch(profileFetch())
  }, [dispatch, id]);

  const handleAddFavorite = (id) => {
    dispatch(fetchAddToFavorite(id))
  }

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
        <Slider {...settings}>
        {categories.map((category) => {
          return (
            <div className="cat_wrapper">
            <Link key={category._id} to={`/category/${category._id}`} className='nav_link'>
              {category.title}
            </Link>
            </div>
          );
        })}
        </Slider>
      </div>
      <div className="all_tests">
        {tests.map((test) => {
          return (
            <div key={test._id} className="test_name">
              <Link to={`/testdescription/${test._id}`} className='tests_link'>
                {test.testName}
              </Link>
                <BsBookmark className="star" onClick={() => handleAddFavorite(test)}/>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default AllTestsPage;
