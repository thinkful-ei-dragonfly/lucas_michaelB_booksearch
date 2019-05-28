import React from 'react';
import ReactDOM from 'react-dom';
import ResultsList from './ResultsList';
import '../../setupTests';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const books = [
  {
  id: '1',
  name: 'book 1',
  authors: 'author 1',
  description: 'description 1',
  printType: 'BOOK',
  price: '11.99',
  isEbook: true,
  thumbnail: 'https://learn.getgrav.org/system/images/media/thumb-jpg.png'
  }
]

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<ResultsList bookResults={books}/>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe(`ResultsList Component`, () => {
  it('renders ResultsList without errors no input', () => {
    const wrapper = shallow(<ResultsList />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders ResultsList without errors with sample props', () => {
    const wrapper = shallow(<ResultsList  bookResults={books}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
