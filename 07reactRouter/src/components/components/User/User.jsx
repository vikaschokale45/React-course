import {useParams} from 'react-router-dom';
export default function user(){
  const {userid} = useParams();
  return (
    <>
      <div className="bg-gray-500 text-white text-center p-50"> User:{userid} </div>
    </>
  );
}
