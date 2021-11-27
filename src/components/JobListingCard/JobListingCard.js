// Style

import { Wrapper } from "./JobListingCard.styles";

import jobListings from "../../data.json";

const JobListingCard = () => {
  return (
    <Wrapper>
      {jobListings.map((listing, index) => (
        <div>
          <img
            src={require(`${listing["logo"]}`).default}
            alt={`${jobListings[0].company}-Company-Logo'`}
          />
          <div className='jobListingHead'>
            <h3 className='companyName'>{listing.company}</h3>
            <button type='text' className='newJobListingButton'>
              NEW!
            </button>
            <button type='text' className='featuredJobListingButton'>
              FEATURED
            </button>
          </div>
          <div className='jobListingDescription'>
            <h2>{listing.position}</h2>
            <p>
              {listing.postedAt}
              <span>.</span>
              {listing.contract}
              <span>.</span>
              {listing.location}
            </p>
          </div>
          <hr />
          <div className='languages'>
            {listing.languages.map((language, index) => (
              <div key={index}>{language}</div>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default JobListingCard;
