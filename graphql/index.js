import { GraphQLClient, gql } from 'graphql-request';

const URL = process.env.NEXT_PUBLIC_GRAPHQL_URL_ENDPOINT;
const graphqlAPI = new GraphQLClient(URL);

// Function to fetch testimonials
export const fetchTestimonials = async () => {
  const query = gql`
    query MyQuery {
      testimonials {
        authorName
        testimonialText
        authorImage {
          fileName
          url
        }
      }
    }
  `;

  try {
    const result = await graphqlAPI.request(query);
    return result.testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};


export const fetchServiceDetails = async () => {
    const query = gql`
      query GetServiceDetails {
        serviceDetails {
          serviceName
          description
          category
        }
      }
    `;
  
    try {
      const result = await graphqlAPI.request(query);
      return result.serviceDetails;
    } catch (error) {
      console.error("Error fetching service details:", error);
      return [];
    }
  };

// New function to fetch team bios
export const fetchTeamBios = async () => {
  const query = gql`
    query GetTeamBios {
      teamBios {
        name
        title
        bio
        profileImage {
          url
        }
      }
    }
  `;

  try {
    const result = await graphqlAPI.request(query);
    return result.teamBios;
  } catch (error) {
    console.error("Error fetching team bios:", error);
    return [];
  }
};


export const fetchGuides = async () => {
  const query = gql`
    query GetGuides {
      guides {
        id
        guideTitle
        guideDescription
        downloadableFile {
          id
          fileName
          url
        }
      }
    }
  `;

  try {
    const result = await graphqlAPI.request(query);
    return result.guides;
  } catch (error) {
    console.error("Error fetching guides:", error);
    return [];
  }
};