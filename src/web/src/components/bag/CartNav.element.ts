import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f6;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
  margin-top: 70px;
`;
export const NavLogo = styled.div`
  flex: 1;
  margin-left: 20px;
  @media (max-width: 768px) {
    width: auto;
    flex: 0;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 60px;
  cursor: pointer;
`;

export const NavCheckOutSteps = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: auto;
    margin-right: 1rem;
    flex: 1;
  }
`;
export const BagCheckout = styled.p`
  color: #20bd99;
  border-bottom: 2px solid #20bd99;
`;
export const AddressCheckout = styled.p`
  color: #696b79;
`;
export const PaymentCheckout = styled.p`
  color: #696b79;
`;

export const DotsCheckout = styled.p``;

export const NavSecure = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 10px;
  margin-left: 20px;
  @media (max-width: 768px) {
    width: auto;
    margin-left: 5px;
  }
`;
export const SecureLogo = styled.img`
  width: 30px;
  height: 30px;
`;
export const SecureN = styled.p`
  margin-bottom: 20px;
`;
