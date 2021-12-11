import Styled from 'styled-components';

const SectionProduitStc=Styled.div`
    .card
    {
        box-shadow: 0 14px 25px 0 rgb(0 0 0 / 20%);
        border: 0px;

        img
        {
            width: 60% !important;
            height: auto !important;
            margin: auto;
        }

        a.panier {
            float: right;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.5rem;
            color:#1e61a3;
        }
        a.price {
            color: #333;
            border: 1px solid #333;
        }

        a.btn.price:hover {
            background: #1e61a3;
            transition: .5s;
            color: #fff;
        }


       
    }

    h1
    {
        font-size: 1.6rem;
        font-weight: 600;
        font-family: inherit;
        color: #fff;
        border-bottom: 2px solid #105083;
        
        span 
        {
            background: #105083;
            padding: 10px;
            /* padding-bottom: 0px; */
            position: relative;
            top: -11px;
        }
    }
`;
export default SectionProduitStc;