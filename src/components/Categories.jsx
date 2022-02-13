import styled from "styled-components";
import { categories } from "../data";
import { mobile, mobile1} from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile1({ padding: "20px", flexDirection:"column" })}
  ${mobile({ padding: "5px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;