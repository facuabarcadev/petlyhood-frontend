# 🐾 PETLYHOOD Frontend

Welcome to the **PETLYHOOD frontend monorepo**, a platform designed to help pet owners manage and locate lost animals.  
This repository is managed with **Nx** and contains the following applications:

- 🎥 **`petlyhood-web`** → Web application built with **Angular**.
- 📱 **`petlyhood-mobile`** → Mobile application built with **Ionic + Angular**.
- 📦 **`petlyhood-core`** → Shared library containing business logic, models, and services.

---

## 📂 **Monorepo Structure**
```
/apps
  /petlyhood-web        → Angular web application
  /petlyhood-mobile     → Ionic + Angular mobile application

/libs
  /petlyhood-core       → Shared library (models, services, business logic)

.nx/                    → Nx configuration files
package.json            → Project dependencies
nx.json                 → Nx workspace configuration
```

---

## 🚀 **Prerequisites**
Before starting, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (recommended version: `>=16`)
- [Nx CLI](https://nx.dev/)
  ```sh
  npm install -g nx
  ```
- [Ionic CLI](https://ionicframework.com/docs/cli) (for mobile development)
  ```sh
  npm install -g @ionic/cli
  ```
- [Android Studio](https://developer.android.com/studio) (to build for Android)
- [Xcode](https://developer.apple.com/xcode/) (to build for iOS)

---

## 🛠 **Installation**
Clone the repository and install dependencies:

```sh
git clone https://github.com/YOUR_USERNAME/petlyhood-frontend.git
cd petlyhood-frontend
npm install
```

---

## 🏃 **Run the Applications**

### 🌍 **Run the Web Application**
```sh
nx serve petlyhood-web
```
Open in: [http://localhost:4200/](http://localhost:4200/)

### 📱 **Run the Mobile Application (in Browser)**
```sh
nx serve petlyhood-mobile
```

### 📱 **Run on Android or iOS**
To build and run on a physical device or emulator:

```sh
nx run petlyhood-mobile:run --platform=android
```

*(Ensure Capacitor and the Android SDK are properly configured).*

---

## ✅ **Testing**
Run unit tests:
```sh
nx test petlyhood-core
nx test petlyhood-web
nx test petlyhood-mobile
```

---

## 🌎 **Code Structure**
Each feature (e.g., authentication, pet management, alerts) is organized within `petlyhood-core` and shared between the web and mobile apps.

Example structure of `petlyhood-core`:
```
/libs/petlyhood-core
  /src
    /lib
      auth.service.ts       → Authentication service
      pet.service.ts        → Pet management
      alert.service.ts      → Alerts and reports
```

---

## 🏰 **Contributing**
Want to contribute? Follow these steps:

1. **Fork the repository**.
2. **Clone your fork**:
   ```sh
   git clone https://github.com/YOUR_USERNAME/petlyhood-frontend.git
   ```
3. **Create a new branch**:
   ```sh
   git checkout -b feature/new-feature
   ```
4. **Make changes and push your code**:
   ```sh
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```
5. **Open a Pull Request** 🚀

---

## 📝 **License**
This project is licensed under the **MIT License**.  
Feel free to use and modify it as needed. 🐶✨

---

Thanks for contributing to **PETLYHOOD**! 💙🐾

