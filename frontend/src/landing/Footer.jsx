import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="h-[120vh] w-full border-t-1 border-[#eee] bg-[#FBFBFB] px-38 pt-8 text-[#424242]">
      <div className="mb-15 flex">
        <div className="mr-12 h-full w-[22%]">
          <img className="h-5 w-36" src="media/images/logo.svg" alt="Logo" />
          <p className="mt-4 text-[12.8px] text-[#666666]">
            &copy; 2010 - 2025, Zerodha Broking Ltd.
          </p>
          <p className="mt-1 text-[12.8px] text-[#666666]">All rights reserved.</p>
          <div className="my-6 flex gap-6 text-xl text-[#666666]">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="border-b-1 border-[#aaaaaa] opacity-20" />
          <div className="my-6 flex gap-6 text-xl text-[#666666]">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4 text-[14px] text-[#666666]">
            <p className="text-lg font-medium text-[#424242]"> Account </p>
            <Link>Open demat account</Link>
            <Link>Minor demat account</Link>
            <Link> NRI demat account </Link>
            <Link> Commodity</Link>
            <Link>Dematerialisation</Link>
            <Link> Fund transfer</Link>
            <Link> MTF </Link>
            <Link> Referral program</Link>
          </div>
          <div className="flex flex-col gap-4 text-[14px] text-[#666666]">
            <p className="text-lg font-medium text-[#424242]">Support</p>
            <Link> Contact us</Link>
            <Link> Support portal</Link>
            <Link> How to file a complaint?</Link>
            <Link> Status of your complaints</Link>
            <Link> Bulletin</Link>
            <Link> Circular</Link>
            <Link> Z-Connect blog</Link>
            <Link> Downloads</Link>
          </div>
          <div className="flex flex-col gap-4 text-[14px] text-[#666666]">
            <p className="text-lg font-medium text-[#424242]">Company</p>
            <Link>About</Link>
            <Link>Philosophy</Link>
            <Link>Press & media</Link>
            <Link>Careers</Link>
            <Link>Zerodha Cares (CSR)</Link>
            <Link>Zerodha.tech</Link>
            <Link>Open source</Link>
          </div>
          <div className="flex flex-col gap-4 text-[14px] text-[#666666]">
            <p className="text-lg font-medium text-[#424242]">Quick links</p>
            <Link>Upcoming IPOs</Link>
            <Link>Brokerage charges</Link>
            <Link>Market holidays</Link>
            <Link>Economic calendar</Link>
            <Link>Calculators</Link>
            <Link>Markets</Link>
            <Link>Sectors</Link>
          </div>
        </div>
      </div>
      <div className="text-[10.4px] leading-5 text-[#9b9b9b]">
        <p className="mb-2">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633
          CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.:
          IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025;
          NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
          #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
          Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking
          please write to{' '}
          <Link className="font-medium text-[#387ed1]"> complaints@zerodha.com</Link>, for DP
          related to <Link className="font-medium text-[#387ed1]"> dp@zerodha.com</Link>. Please
          ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
        </p>
        <p className="mb-2 leading-5">
          Procedure to file a complaint on{' '}
          <Link className="font-medium text-[#387ed1]">SEBI SCORES</Link>: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile
          Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
        <p className="mb-2">
          <Link className="font-medium text-[#387ed1]">Smart Online Dispute Resolution </Link>|
          <Link className="font-medium text-[#387ed1]">Grievances Redressal Mechanism</Link>
        </p>
        <p className="mb-2 leading-5">
          Investments in securities market are subject to market risks; read all the related
          documents carefully before investing.
        </p>
        <p className="mb-2 leading-5">
          Attention investors: 1) Stock brokers can accept securities as margins from clients only
          by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail
          and phone number with your stock broker / depository participant and receive OTP directly
          from depository on your e-mail and/or mobile number to create pledge. 3) Check your
          securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every
          month.
        </p>
        <p className="mb-2 leading-5">
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs
          with your stock brokers. Receive information of your transactions directly from Exchange
          on your mobile/email at the end of the day. Issued in the interest of investors. KYC is
          one time exercise while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same
          process again when you approach another intermediary." Dear Investor, if you are
          subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account
          number and sign the IPO application form to authorize your bank to make payment in case of
          allotment. In case of non allotment the funds will remain in your bank account. As a
          business we don't give stock tips, and have not authorized anyone to trade on behalf of
          others. If you find anyone claiming to be part of Zerodha and offering such services,
          please <Link className="font-medium text-[#387ed1]">create a ticket here</Link> .
        </p>
      </div>
      <div className="mt-4 mb-10 flex h-4 items-center justify-center gap-6 text-xs font-medium text-[#9b9b9b]">
        <Link>NSE </Link>
        <Link>BSE</Link>
        <Link>MCX</Link>
        <Link>Terms & conditions</Link>
        <Link> Policies & procedures</Link>
        <Link>Privacy policy</Link>
        <Link>Disclosure</Link>
        <Link>For investor's attention </Link>
        <Link>Investor charter</Link>
      </div>
    </div>
  );
};

export default Footer;
