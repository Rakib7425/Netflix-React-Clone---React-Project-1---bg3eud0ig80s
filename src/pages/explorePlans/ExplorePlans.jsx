import React from 'react';
import PlanCard from './PlanCard';


import './styles.scss';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const plans = [
    {
        name: 'Free',
        price: '$0.00/month',
        description: 'Access to basic features and content.'
    },
    {
        name: 'Basic Plan',
        price: '$9.99/month',
        description: 'Access to basic features and something extra.'
    },
    {
        name: 'Standard Plan',
        price: '$14.99/month',
        description: 'HD streaming and access to more content.'
    },
    {
        name: 'Premium Plan',
        price: '$19.99/month',
        description: 'Ultra HD streaming and access to all content two user can use at one time.'
    },
    {
        name: 'Family Plan',
        price: '$29.99/month',
        description: 'Ultra HD streaming and access to all content six user can use at one time.'
    },
];

const ExplorePlans = () => {
    return (
        <ContentWrapper>
            <div className="explore-plans">
                <div className="pageTitle">
                    Explore Plans.
                </div>
                <div className="plans">
                    <div className="plan-list">
                        {plans.map((plan, index) => (
                            <PlanCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};


export default ExplorePlans;