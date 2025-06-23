import React from 'react';
import { Link } from 'react-router-dom';

const CreateTicket = () => {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto h-full max-w-7xl px-24 pt-10">
        <h3 className="text-xl tracking-normal text-[#666666]">
          To create a ticket, select a relevant topic
        </h3>
        <div className="mt-10 flex w-[95%] justify-between">
          <div className="">
            <Link>
              <h4 className="text-lg tracking-normal text-[#222222]">
                <i class="fa fa-plus-circle mx-2" aria-hidden="true"></i> Account Opening
              </h4>
            </Link>
            <div className="mx-auto mt-6 flex flex-col gap-4 pl-8 text-sm tracking-normal text-[#387ed1]">
              <Link>Resident individual</Link>
              <Link>Minor</Link>
              <Link> Non Resident Indian (NRI)</Link>
              <Link> Company, Partnership, HUF and LLP</Link>
              <Link> Glossary</Link>
            </div>
          </div>
          <div className="">
            <Link>
              <h4 className="text-lg tracking-normal text-[#222222]">
                <i class="fa fa-user-o mx-2" aria-hidden="true"></i> Your Zerodha Account
              </h4>
            </Link>
            <div className="mx-auto mt-6 flex flex-col gap-4 pl-8 text-sm tracking-normal text-[#387ed1]">
              <Link>Your Profile</Link>
              <Link>Account modification</Link>
              <Link>
                Client Master Report (CMR) and Depository <br /> Participant (DP)
              </Link>
              <Link>Nomination</Link>
              <Link>Transfer and conversion of securities</Link>
            </div>
          </div>
          <div className="">
            <Link>
              <h4 className="text-lg tracking-normal text-[#222222]">
                <i class="fa fa-bar-chart mx-2" aria-hidden="true"></i> Kite
              </h4>
            </Link>
            <div className="mx-auto mt-6 flex flex-col gap-4 pl-8 text-sm tracking-normal text-[#387ed1]">
              <Link>Resident individual</Link>
              <Link>Minor</Link>
              <Link> Non Resident Indian (NRI)</Link>
              <Link> Company, Partnership, HUF and LLP</Link>
              <Link> Glossary</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-[95%] justify-between">
          <div className="">
            <Link>
              <h4 className="text-lg tracking-normal text-[#222222]">
                <i class="fa fa-credit-card mx-2" aria-hidden="true"></i> Funds
              </h4>
            </Link>
            <div className="mx-auto mt-6 flex flex-col gap-4 pl-8 text-sm tracking-normal text-[#387ed1]">
              <Link>Resident individual</Link>
              <Link>Minor</Link>
              <Link> Non Resident Indian (NRI)</Link>
              <Link> Company, Partnership, HUF and LLP</Link>
              <Link> Glossary</Link>
            </div>
          </div>
          <div className="">
            <Link>
              <h4 className="text-lg tracking-normal text-[#222222]">
                <span className="mx-2">@</span> Console
              </h4>
            </Link>
            <div className="mx-auto mt-6 flex flex-col gap-4 pl-8 text-sm tracking-normal text-[#387ed1]">
              <Link>Your Profile</Link>
              <Link>Account modification</Link>
              <Link>
                Client Master Report (CMR) and Depository <br /> Participant (DP)
              </Link>
              <Link>Nomination</Link>
              <Link>Transfer and conversion of securities</Link>
            </div>
          </div>
          <div className="">
            <Link>
              <h4 className="text-lg tracking-normal text-[#222222]">
                <i class="fa fa-circle-thin mx-2" aria-hidden="true"></i>Coin
              </h4>
            </Link>
            <div className="mx-auto mt-6 flex flex-col gap-4 pl-8 text-sm tracking-normal text-[#387ed1]">
              <Link>Resident individual</Link>
              <Link>Minor</Link>
              <Link> Non Resident Indian (NRI)</Link>
              <Link> Company, Partnership, HUF and LLP</Link>
              <Link> Glossary</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
