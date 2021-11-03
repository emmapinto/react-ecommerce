import { useParams } from "react-router-dom";

export const Category = () => {
    const { categoryId } = useParams();

    return (
        <h3>Estás en la categoria {categoryId}</h3>
    )
};

export default Category;