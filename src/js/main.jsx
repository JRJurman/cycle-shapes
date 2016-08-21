import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {html} from 'snabbdom-jsx';

function main(sources) {
  const sinks = {
    DOM: sources.DOM.select('.field').events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        <div>
          <label>Name:</label>
          <input className="field" type="text"></input>
          <hr />
          <h1>Hello {name}</h1>
        </div>
      )
  };
  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app-container')
};

run(main, drivers);
