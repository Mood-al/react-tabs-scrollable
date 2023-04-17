import React from "react";
import { Tab, Tabs } from "react-tabs-scrollable";
import Title from "../Title";
import {
  FaPizzaSlice,
  FaFish,
  FaHamburger,
  FaBirthdayCake,
  FaCoffee,
  FaHotdog,
} from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import {
  GiBowlOfRice,
  GiWrappedSweet,
  GiChickenOven,
  GiFrenchFries,
} from "react-icons/gi";
import styled from "@emotion/styled";
const foodCat = [
  {
    name: "pizza",
    icon: <FaPizzaSlice />,
  },
  {
    name: "fish",
    icon: <FaFish />,
  },
  {
    name: "burger",
    icon: <FaHamburger />,
  },
  {
    name: "rice",
    icon: <GiBowlOfRice />,
  },
  {
    name: "cake",
    icon: <FaBirthdayCake />,
  },
  {
    name: "sweets",
    icon: <GiWrappedSweet />,
  },
  {
    name: "drinks",
    icon: <BiDrink />,
  },
  {
    name: "chicken",
    icon: <GiChickenOven />,
  },
  {
    name: "coffee",
    icon: <FaCoffee />,
  },
  {
    name: "fries",
    icon: <GiFrenchFries />,
  },
  {
    name: "hotdogs",
    icon: <FaHotdog />,
  },
  {
    name: "hotdogs",
    icon: <FaHotdog />,
  },
  {
    name: "hotdogs",
    icon: <FaHotdog />,
  },
  {
    name: "hotdogs",
    icon: <FaHotdog />,
  },
  {
    name: "hotdogs",
    icon: <FaHotdog />,
  },
];
const ResturantMenuDemo = ({ title }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    console.log(e);
    setActiveTab(index);
  };
  return (
    <div>

      <StyledResturantMenuDemo >
        <Tabs activeTab={activeTab} onTabClick={onTabClick}>
          {/* generating an array to loop through it  */}
          {foodCat.map((food) => (
            <Tab key={food.name} className="menu-container">
              <div className="menu-icon">{food.icon}</div>
              <div className="menu-name">{food.name}</div>
            </Tab>
          ))}
        </Tabs>
      </StyledResturantMenuDemo>
      
    </div>
  );
};

export default ResturantMenuDemo;
const StyledResturantMenuDemo = styled.div`
  .rts___tabs___container {
    position: relative;
  }

  .rts___nav___btn {
    border: none;
    width: 100%;
    position: absolute;

    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    top: 50%;
    transform: translate(0, -50%);
    background-color: var(--rts-primary-color);
    border-radius: 50%;
  }
  .rts___nav___btn > svg {
    stroke: #fff;
  }
  .rts___right___nav___btn {
    right: -20px;
  }
  .rts___left___nav___btn {
    left: -20px;
  }
  svg {
    width: 3rem;
    height: 3rem;
  }
  .menu-container {
    padding: 5px 5px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-radius: 60px;
    margin: 3px;
  }
  .menu-icon {
    padding: 20px;
    border: var(--rts-gray-color) 2px solid;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  .menu-name {
    white-space: normal;
  }
`;
