import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './MoviesForm.styles';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { toast } from 'react-toastify';


const MoviesForm = ({onSubmit}) => {
   const [searchQuery, setSearchQuery] = useState('');
   
    const handleImgChange = e => {
    setSearchQuery(e.currentTarget.value);
   };
   
    const handelSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.warn('🦄 Please, enter text !', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
         progress: undefined,
      });
      return;
    }

    onSubmit(searchQuery);

  };
   return (
       <SearchbarContainer>
      <SearchForm onSubmit={handelSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            {<AiOutlineSearch size={24} />}
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
               value={searchQuery}
                  onChange={handleImgChange}
        />
      </SearchForm>
    </SearchbarContainer>
   )
}

MoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default MoviesForm;