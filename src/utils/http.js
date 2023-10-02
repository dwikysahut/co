
import { useQuery, gql } from '@apollo/client';

import { contactListQuery } from './query';



export const GET_CONTACTS =  gql`${contactListQuery}`