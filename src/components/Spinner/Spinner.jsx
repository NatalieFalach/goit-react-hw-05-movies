import { ThreeDots } from 'react-loader-spinner'

const Spinner = () => (
  <ThreeDots
    height="80" 
    width="80" 
    radius="9"
    color= "orangered"
    ariaLabel="three-dots-loading"
    wrapperStyle={{margin: '0 auto', width: '100px'}}
    wrapperClassName=""
    visible={true}
  />
);


export default Spinner;