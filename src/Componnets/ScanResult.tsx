'use client'
import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

interface Severity {
  [key: string]: string[];
}

interface Vulnerability {
  [key: string]: string | Severity;
}

interface ScanResult {
  [key: string]: string | Vulnerability;
}

interface ScanResultProps {
  data: ScanResult;
}

const Container = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: #007aff; /* iOS blue */
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.3rem 0;
  color: #ff9500; /* iOS orange */
`;

const List = styled.ul`
  list-style: disc;
  margin: 0.5rem 0;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  color: #000; /* Black text */
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DetectedText = styled.span`
  color: red;
  margin-right: 0.5rem;
`;

const NotDetectedText = styled.span`
  color: green;
  margin-right: 0.5rem;
`;

const PotentialWarningText = styled.span`
  color: red;
  margin-right: 0.5rem;
`;

const MissingText = styled.span`
  color: red;
  margin-right: 0.5rem;
`;

const SafeText = styled.span`
  color: green;
  margin-right: 0.5rem;
`;

const ScanResultComponent: React.FC<ScanResultProps> = ({ data }) => {
    // Function to check if a string contains "ERROR"
    const containsError = (text: string) => {
      return text.includes('ERROR');
    };
  
    // Function to check if a URL uses "http://" or "https://"
    const isSecureUrl = (text: string) => {
      return text.startsWith('https://') || text.startsWith('http://');
    };

  return (
    <div>
      {Object.keys(data).map((category) => {
        const categoryData = data[category];
        return (
          <Container key={category}>
            <Title>{category}</Title>
            {typeof categoryData === 'string' ? (
              <p>
                {containsError(categoryData) && (
                  <p>
                    <IconWrapper>
                      <FaExclamationTriangle style={{ color: 'red' }} />
                    </IconWrapper>
                    Error occurred: {categoryData}
                  </p>
                )}
                {isSecureUrl(categoryData) && (
                  <p>
                    <IconWrapper>
                      <FaCheckCircle style={{ color: 'green' }} />
                    </IconWrapper>
                    Secure URL: {categoryData}
                  </p>
                )}
                <IconWrapper>
                  {categoryData === 'Detected' ? (
                    <DetectedText>Detected:</DetectedText>
                  ) : categoryData === 'Not Detected' ? (
                    <NotDetectedText>Not Detected:</NotDetectedText>
                  ) : categoryData.includes('Potential') ? (
                    <PotentialWarningText>Potential:</PotentialWarningText>
                  ) : categoryData.includes('Missing') ? (
                    <MissingText>Missing:</MissingText>
                  ) : (
                    <SafeText>Safe:</SafeText>
                  )}
                  {categoryData === 'Detected' ? (
                    <FaExclamationTriangle style={{ color: 'red' }} />
                  ) : categoryData === 'Not Detected' ? (
                    <FaCheckCircle style={{ color: 'green' }} />
                  ) : categoryData.includes('Potential') ? (
                    <FaExclamationTriangle style={{ color: 'red' }} />
                  ) : categoryData.includes('Missing') ? (
                    <FaExclamationTriangle style={{ color: 'red' }} />
                  ) : (
                    <FaCheckCircle style={{ color: 'green' }} />
                  )}
                </IconWrapper>
                {categoryData}
              </p>
            ) : (
              Object.keys(categoryData).map((vulnerability) => (
                <div key={vulnerability}>
                  <SubTitle>{vulnerability}</SubTitle>
                  {typeof categoryData[vulnerability] === 'string' ? (
                    <p>
                      {containsError(categoryData[vulnerability] as string ) && (
                        <p>
                          <IconWrapper>
                            <FaExclamationTriangle style={{ color: 'red' }} />
                          </IconWrapper>
                          Error occurred: {categoryData[vulnerability] as React.ReactNode}
                        </p>
                      )}
                       {isSecureUrl(categoryData[vulnerability] as string) && (
                        <p>
                          <IconWrapper>
                            <FaCheckCircle style={{ color: 'green' }} />
                          </IconWrapper>
                          Secure URL: {categoryData[vulnerability] as React.ReactNode}
                        </p>
                      )}
                      <IconWrapper>
                        {categoryData[vulnerability] === 'Detected' ? (
                          <DetectedText>Detected:</DetectedText>
                        ) : categoryData[vulnerability] === 'Not Detected' ? (
                          <NotDetectedText>Not Detected:</NotDetectedText>
                        ) : categoryData[vulnerability].includes('Potential') ? (
                          <PotentialWarningText>Potential:</PotentialWarningText>
                        ) : categoryData[vulnerability].includes('Missing') ? (
                          <MissingText>Missing:</MissingText>
                        ) : (
                          <SafeText>Safe:</SafeText>
                        )}
                        {categoryData[vulnerability] === 'Detected' ? (
                          <FaExclamationTriangle style={{ color: 'red' }} />
                        ) : categoryData[vulnerability] === 'Not Detected' ? (
                          <FaCheckCircle style={{ color: 'green' }} />
                        ) : categoryData[vulnerability].includes('Potential') ? (
                          <FaExclamationTriangle style={{ color: 'red' }} />
                        ) : categoryData[vulnerability].includes('Missing') ? (
                          <FaExclamationTriangle style={{ color: 'red' }} />
                        ) : (
                          <FaCheckCircle style={{ color: 'green' }} />
                        )}
                      </IconWrapper>
                      {categoryData[vulnerability] as React.ReactNode}
                    </p>
                  ) : (
                    <div>
                      {Object.keys(categoryData[vulnerability] as Severity).map((severity) => (
                        <div key={severity}>
                          <SubTitle>{severity}</SubTitle>
                          <List>
                            {(categoryData[vulnerability] as Severity)[severity].map((item) => (
                              <ListItem key={item}>{item}</ListItem>
                            ))}
                          </List>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </Container>
        );
      })}
    </div>
  );
};

export default ScanResultComponent;
