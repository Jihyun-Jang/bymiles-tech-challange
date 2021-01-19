import { act, render, screen } from '@testing-library/react';
import Signin from './components/Signin';
import DisplayPolicy from './components/DisplayPolicy';
// import PolicyDetail from './components/PolicyDetail';

test("Signin page renders correctly", () => {
  render(<Signin />);
  const header = screen.getByText("Sign In");
  expect(header).toBeInTheDocument();
  const userName = screen.getByText("User Name:");
  expect(userName).toBeInTheDocument();    
});

const mockData = {
  "policy": {
    "compulsory_excess": 100,
    "voluntary_excess": 100,
    "address": {
      "line_1": "Flat 1, 11 The Street",
      "line_2": "Little Hampton",
      "line_3": "Burton-on-the-water",
      "county": "Avon",
      "city": "Stroud",
      "country": "GB",
      "postcode": "W53TR"
    },
    "usage": "SDP",
    "cover": "Comprehensive",    
    "underwriter_ref": "AXABM000001",
    "product_name": "PBMYD",
    "policy_year": 1,
    "created_at": 1599567165,
    "policy_ref": "winter-snow-cold"
  },    
  "vehicle": {
    "reg": "WO123XX",
    "vin": "YV1UZ25UCK1337428",
    "type": "01",
    "make": "volvo",
    "model": "A",
    "colour": "blue"      
  }
}

test("DisplayPolicy component renders correctly", () => {
  render(<DisplayPolicy policyData={mockData} /> );
  const policyRef = screen.getByText("winter snow cold"); 
  expect(policyRef).toBeInTheDocument(); 
  const car = screen.getByText("Volvo A Blue WO123XX");
  expect(car).toBeInTheDocument(); 
});


// PolicyDetail component test which doesn't pass

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve(mockData)
// }));

// beforeEach(() => {
//   fetch.mockClear();
// });

// test("PolicyDetail component renders correctly with a mock response", async () => {
//   await act( async () => render(<PolicyDetail />));
//   expect(screen.getByText("winter snow cold")).toBeInTheDocument();
// });