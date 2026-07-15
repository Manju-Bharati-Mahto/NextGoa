import { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  alternates: {
    canonical: "/policies",
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}
