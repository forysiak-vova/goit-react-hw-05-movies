import { Grid } from 'react-loader-spinner';
import { Spinner } from './Loader.styles';


function Loader() {
  return (
    <Spinner>
      <Grid color="#00BFFF" height={40} width={80} />
    </Spinner>
  );
}

export default Loader;