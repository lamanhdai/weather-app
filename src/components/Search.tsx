import React, { useRef} from 'react';
import {
  Form,
  FormControl
} from 'react-bootstrap';

interface SearchProps {
  onSearch: (keyword: string) => void
}

function Search(props:SearchProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      return;
    }
    if(searchRef.current) {
      props.onSearch(searchRef.current.value)
    }
  };
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
