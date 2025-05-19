import React from 'react'; 
import { render, screen } from '@testing-library/react';
import Card from '@/components/Card';
import { FiAlertCircle } from 'react-icons/fi';

describe("Card Component", () => {

  it("renders the title and value correctly", () => {
    render(<Card title="Open Tickets" value={5} />);
    expect(screen.getByText("Open Tickets")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders value correctly when it is a string", () => {
    render(<Card title="Status" value="Active" />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("renders icon if provided", () => {
    render(<Card title="Open Tickets" value={5} icon={<FiAlertCircle />} />);
    const icon = screen.getByTestId("card-icon");
    expect(icon).toBeInTheDocument();
  });

  it("does not render icon if not provided", () => {
    render(<Card title="Open Tickets" value={5} />);
    expect(screen.queryByTestId("card-icon")).toBeNull();
  });

  it("matches snapshot", () => {
    const { container } = render(<Card title="Open Tickets" value={5} icon={<FiAlertCircle />} />);
    expect(container).toMatchSnapshot();
  });
});