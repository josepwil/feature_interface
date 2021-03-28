import React from 'react';
import { render, screen, fireEvent, waitFor, getAllByTestId, getByText } from '@testing-library/react';
import App from './App';

describe('Application', () => {
  it('renders first feature', () => {
      render(<App />);
      const featureA = screen.getByText(/Feature A/i);
      expect(featureA).toBeInTheDocument();
  });

  it('renders subfeatures when a feature is selected', async () => {
    const { container } = render(<App />)
    const checkboxes = getAllByTestId(container, /checkbox-id/i)
    const FeatureA = checkboxes[0]
    fireEvent.click(FeatureA)
    await waitFor(() => getByText(container, /Sub-feature A-1/i))
  });
})


