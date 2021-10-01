import { useParams } from 'react-router-dom';



const ProgramDetail = () => {
  //useParams is using the url from web browser and access its value, in this case its /:'productId'
  const params = useParams()
  //destructuring object, accessing key value directly
  const {productId} = useParams();

  console.log(params);
  console.log(params.productId)
  console.log(productId)

  return (
    <div>
      <h1>Moreee</h1>
			<p>{productId}</p>
    </div>
  );
};

export default ProgramDetail;
