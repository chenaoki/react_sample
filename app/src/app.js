import React from 'react';
import { render } from 'react-dom';
import { Counter } from './Counter.js'
import { Repos } from './Repos.js'
import { Todo } from './Todo.js'


render(
  /*<Counter />,*/
  /*<Repos />,*/
  <Todo />,
  document.getElementById('app')
);
