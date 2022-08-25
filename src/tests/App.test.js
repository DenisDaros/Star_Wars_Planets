import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import TableProvider from '../context/TableProvider';


describe('Cobertura de testes', () => {

  it('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});

  it('testando input', async () => {
    render(
        <App />
    );

    const name = screen.getByRole('textbox');
    expect(name).toBeInTheDocument();

    const colums = screen.getByTestId('column-filter');
    expect(colums).toBeInTheDocument();

    userEvent.selectOptions(colums, 'diameter');

    const operador = screen.getByTestId('comparison-filter');
    expect(operador).toBeInTheDocument();

    userEvent.selectOptions(operador, 'maior que');

    const number = screen.getByTestId('value-filter');
    expect(number).toBeInTheDocument();

    userEvent.type(number, '8899');

    const btnFiltrar = screen.getByTestId('button-filter');
    expect(btnFiltrar).toBeInTheDocument();

    userEvent.click(btnFiltrar);

    const planet = await screen.findByText(/Dagobah/i);
  expect(planet).toBeInTheDocument();
  })
  it('testando input', async () => {
    render(
        <App />
    );

    const colums = screen.getByTestId('column-filter');
    expect(colums).toBeInTheDocument();

    userEvent.selectOptions(colums, 'diameter');

    const operador = screen.getByTestId('comparison-filter');
    expect(operador).toBeInTheDocument();

    userEvent.selectOptions(operador, 'menor que');

    const number = screen.getByTestId('value-filter');
    expect(number).toBeInTheDocument();

    userEvent.type(number, '8901');

    const btnFiltrar = screen.getByTestId('button-filter');
    expect(btnFiltrar).toBeInTheDocument();

    userEvent.click(btnFiltrar);

    const planet = await screen.findByText(/Dagobah/i);
  expect(planet).toBeInTheDocument();
  })
  it('testando input', async () => {
    render(
        <App />
    );

    const colums = screen.getByTestId('column-filter');
    expect(colums).toBeInTheDocument();

    userEvent.selectOptions(colums, 'diameter');

    const operador = screen.getByTestId('comparison-filter');
    expect(operador).toBeInTheDocument();

    userEvent.selectOptions(operador, 'igual a');

    const number = screen.getByTestId('value-filter');
    expect(number).toBeInTheDocument();

    userEvent.type(number, '8900');

    const btnFiltrar = screen.getByTestId('button-filter');
    expect(btnFiltrar).toBeInTheDocument();

    userEvent.click(btnFiltrar);

    const planet = await screen.findByText(/Dagobah/i);
  expect(planet).toBeInTheDocument();
  })
})
