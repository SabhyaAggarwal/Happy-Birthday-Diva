# 🧠 **Smart Door Lock Observation Sheet**

As part of this project, you have designed a **Smart Door Lock** model.  
Now, let's explore how the door lock behaves under different conditions such as **recognition accuracy**, **response time**, and **connectivity**.  

> ⚙️ **Note:** For all observations, test the system in the same location and environment to maintain fairness and consistency.  
> Ensure that the **ESP32-CAM**, **Arduino**, and **lock mechanism** are properly powered and connected before each experiment.

---

## 🔹 **1. Impact of Face Recognition Accuracy**

**Objective:**  
To explore and understand how the face recognition system performs with different lighting and face angles.

**Experiment:**  
Test the door lock with different lighting conditions and face angles. Predict whether the door will unlock successfully. Conduct the experiment and record the actual result.

| # | Lighting Condition | Face Angle | **Prediction** | **Observation** |
|:-:|:------------------:|:-----------:|:---------------:|:----------------:|
| 01 | 🌞 <span style="color:#FFD700;">Bright daylight</span> | 🧍 Front-facing | ✅ <span style="color:green;">Unlocks</span> | 🔓 <span style="color:green;">Unlocked instantly</span> |
| 02 | 💡 <span style="color:#FFB6C1;">Dim indoor light</span> | ↩️ Side-facing | ⚠️ <span style="color:orange;">May fail</span> | ❌ <span style="color:red;">Failed to detect face</span> |

---

## 🔹 **2. Impact of Distance from Camera**

**Objective:**  
To investigate and understand how distance affects the camera’s recognition and lock response.

**Experiment:**  
Stand at different distances from the ESP32-CAM and predict whether the system will unlock. Record the actual observation.

| # | Distance from Camera | **Prediction** | **Observation** |
|:-:|:--------------------:|:---------------:|:----------------:|
| 03 | 📏 <span style="color:#1E90FF;">30 cm</span> | ✅ <span style="color:green;">Unlocks</span> | 🔓 <span style="color:green;">Unlocked successfully</span> |
| 04 | 📏 <span style="color:#DC143C;">1 meter</span> | ⚠️ <span style="color:orange;">May not detect</span> | ❌ <span style="color:red;">Failed to recognize face</span> |

---

## 🔹 **3. Impact of Network Connectivity**

**Objective:**  
To explore how network strength affects the response time of the smart door lock.

**Experiment:**  
Test the system under different Wi-Fi signal strengths. Predict and record how long (in seconds) the door takes to unlock after face detection.

| # | Wi-Fi Signal Strength | **Prediction (Time in seconds)** | **Observation (Time in seconds)** |
|:-:|:---------------------:|:--------------------------------:|:----------------------------------:|
| 05 | 📶 <span style="color:green;">Strong (Full bars)</span> | 1 | 1.2 |
| 06 | 📶 <span style="color:red;">Weak (1 bar)</span> | 4 | 4.5 |

---

## 🔹 **Additional Observations**

| **Observation Type** | **Notes** |
|:----------------------|:----------|
| ⚡ Power Supply Stability | <span style="color:green;">Stable with 5V regulated source</span> |
| ☁️ Bluetooth/Cloud Command Response | <span style="color:orange;">Commands received with 1-second delay</span> |
| 🔐 Relay/Lock Response Consistency | <span style="color:green;">Reliable and consistent performance</span> |

---
