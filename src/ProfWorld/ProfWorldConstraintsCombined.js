import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProjectsConstraintsCombined = () => {
  return (
    <Grid item sm={12} xs={12} md={10}>
      <Box
        sx={{
          border: '1px solid #EFEFF8',
          padding: '32px',
        }}
      >
        <Box
          sx={{
            fontFamily: 'Calibre Regular',
            fontSize: '16px', // Font size of 16px
            lineHeight: '24px',
          }}
        >
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              paddingLeft: 0,
              '& li': {
                mb: '8px', // Adds spacing of 8px between list items
              },
            }}
          >
            {/* Temporary Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                }}
              >
                Temporary restrictions:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                }}
              >
                <li>
                  Project deadline: Setting strict deadlines at each stage of development can create pressure and affect the quality of solutions. You will have to carefully plan the time needed to test and implement systems.
                </li>
                <li>
                  Vendor Alignment and Integration: Time constraints can also make it difficult for software or tool vendors to determine delivery dates.
                </li>
              </Box>
            </li>

            {/* Budget Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                }}
              >
                Budget restrictions:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                }}
              >
                <li>
                  Financial resource: The budget may be limited, which may reduce the ability to purchase expensive software or attract highly qualified specialists to implement the intended functions of the system.
                </li>
                <li>
                  Limitations on additional expenses: Possible unaccounted costs for employee training or technical support after retirement, which are also worth considering in planning.
                </li>
              </Box>
            </li>

            {/* Technological Limitations */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                }}
              >
                Technological limitations:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                }}
              >
                <li>
                  Compatibility with existing power supplies: Integrating a new system with existing HR solutions may be a control unit due to incompatibility or unstable technologies.
                </li>
                <li>
                  Technology Availability: Some functions may require technologies that have not yet been implemented within the organization, which can add time and cost to the project.
                </li>
              </Box>
            </li>

            {/* Human Resources */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                }}
              >
                Human resources:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                }}
              >
                <li>
                  Insufficient qualifications of employees: Implementation of the system requires testers and HR specialists to have certain skills in the field of IT and analytics, which can lead to additional time for training or hiring new specialists.
                </li>
                <li>
                  Resistance to Change: Employees may be resistant to new processes and technologies, so a change management plan needs to be developed to minimize the negative impact.
                </li>
              </Box>
            </li>

            {/* Legal and Ethical Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                }}
              >
                Legal and ethical restrictions:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                }}
              >
                <li>
                  Legal Compliance: It is important to be aware of health and employment laws that may affect the processing of candidate data.
                </li>
                <li>
                  Ethical considerations for selection: Testing and profiling methods must be used to ensure that they do not violate ethical standards or create bias.
                </li>
              </Box>
            </li>

            {/* Qualitative Restrictions */}
            <li>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  mb: '8px',
                  fontSize: '16px',
                }}
              >
                Qualitative restrictions:
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                }}
              >
                <li>
                  Data Quality: The success of the system will depend on the quality of the input data (resumes, test results, etc.). It will be necessary to ensure control of the purity and completeness of information.
                </li>
                <li>
                  Validation and updating of profiling methods: Psychodiagnostic and testing methods should be validated and updated according to current state-of-the-art research.
                </li>
              </Box>
            </li>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectsConstraintsCombined;
