import React, { useRef} from 'react';
import {
  Form,
  FormControl
} from 'react-bootstrap';

import {debounce} from '../core/utils';

interface SearchProps {
  onSearch: (keyword: string) => void
}

function Search(props:SearchProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      return;
    }
    debounced()
  }
  const debounced = debounce(() => {
    console.log('test')
    if(searchRef.current) {
      props.onSearch(searchRef.current.value)
    }
  }, 3000);


  return (
    <div className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <FormControl type="text" aria-describedby="search" role="search" placeholder="Search a location" ref={searchRef} required />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Search;
