import styled from 'styled-components'

export const AnalogClockWrapper = styled.div`
    position: relative;

    width: 31.25rem;
    height: 31.25rem;
    border-radius: 50%;
    border: 0.313rem solid var(--gray-700);
    background-color: var(--gray-800);
    background-image: url('/clock.png');
    background-size: cover;
    background-position: center;
    box-shadow:
        0 -0.5rem 0.5rem rgba(255, 255, 255, 0.05),
        inset 0 -0.5rem 0.5rem rgba(255, 255, 255, 0.05),
        0 0.5rem 0.5rem rgba(0, 0, 0, 0.3),
        inset 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        z-index: 5;
        position: absolute;

        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: var(--white);
    }

    .pointer-hour,
    .pointer-minute,
    .pointer-second {
        position: absolute;

        width: 1.25rem;
        border-radius: 0.4rem;

        display: flex;
        justify-content: center;
    }

    .pointer-hour::before,
    .pointer-minute::before,
    .pointer-second::before {
        content: '';
        position: absolute;

        border-radius: 0.4rem;
    }

    .pointer-hour {
        height: 11.25rem;

        &::before {
            z-index: 2;

            width: 0.5rem;
            height: 6.25rem;
            background-color: var(--primary-400);
        }
    }

    .pointer-minute {
        height: 16.25rem;

        &::before {
            z-index: 3;

            width: 0.375rem;
            height: 8.75rem;
            background-color: var(--primary-600);
        }
    }

    .pointer-second {
        height: 21.25rem;

        &::before {
            z-index: 4;

            width: 0.25rem;
            height: 14.375rem;
            background-color: var(--primary-400);
        }
    }

    @media (max-width: 600px) {
        width: 18.75rem;
        height: 18.75rem;

        .pointer-hour {
            height: 8.25rem;

            &::before {
                height: 4.25rem;
            }
        }

        .pointer-minute {
            height: 11.25rem;

            &::before {
                height: 5.75rem;
            }
        }

        .pointer-second {
            height: 12.25rem;

            &::before {
                height: 8.375rem;
            }
        }
    }
`
