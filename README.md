# Smart Door Lock — Observation Sheet

This document records practical observations for the Smart Door Lock model. The goal is to test how the system behaves under different conditions such as recognition accuracy, response time, and network connectivity.

Note: For consistent results, run all tests in the same location and environment. Make sure the ESP32-CAM, Arduino, and lock mechanism are powered and connected before each test.

---

## 1. Impact of Face Recognition Accuracy

Objective:
To evaluate how the face recognition system performs under different lighting conditions and face angles.

Experiment:
Test the door lock with different lighting conditions and face angles. Predict whether the door will unlock, then perform the test and record the result.

| #  | Lighting Condition | Face Angle   | Prediction | Observation              |
|:--:|:------------------:|:------------:|:----------:|:------------------------:|
| 01 | Bright daylight    | Front-facing | Unlocks    | Unlocked instantly       |
| 02 | Dim indoor light   | Side-facing  | May fail   | Failed to detect face    |

---

## 2. Impact of Distance from Camera

Objective:
To understand how distance affects recognition and lock response.

Experiment:
Stand at different distances from the ESP32-CAM, predict whether the system will unlock, then record the actual observation.

| #  | Distance from Camera | Prediction     | Observation                 |
|:--:|:--------------------:|:--------------:|:---------------------------:|
| 03 | 30 cm                | Unlocks        | Unlocked successfully       |
| 04 | 1 meter              | May not detect | Failed to recognize face    |

---

## 3. Impact of Network Connectivity

Objective:
To measure how Wi-Fi signal strength affects the system's response time.

Experiment:
Test the system under different Wi-Fi signal strengths. Predict and record how long (in seconds) the door takes to unlock after face detection.

| #  | Wi-Fi Signal Strength | Prediction (s) | Observation (s) |
|:--:|:---------------------:|:--------------:|:---------------:|
| 05 | Strong (full bars)    | 1.0            | 1.2             |
| 06 | Weak (1 bar)          | 4.0            | 4.5             |

---

## Additional Observations

| Observation Type                 | Notes                                      |
|:---------------------------------|:-------------------------------------------|
| Power supply stability           | Stable with a regulated 5V source          |
| Cloud / remote command response  | Commands arrive with about a 1 second delay |
| Relay / lock response consistency| Reliable and consistent                    |
