import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <nav class="border-b py-6 px-6 lg:hidden">
      <div class="flex items-center justify-between">
        <a class="text-2xl font-semibold" href="#">
          <img
            class="h-10"
            src="assets/logos/artemis-logo-light.svg"
            alt=""
            width="auto"
          />
        </a>
        <button
          class="navbar-burger flex items-center rounded focus:outline-none"
        >
          <svg
            class="block h-8 w-8 rounded bg-indigo-500 p-2 text-white hover:bg-indigo-600"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </nav>
    <div class="navbar-menu relative z-50 hidden lg:block">
      <div
        class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-10 lg:hidden"
      ></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex w-3/4 flex-col border-r bg-white pt-6 pb-8 sm:max-w-xs lg:w-80"
      >
        <div
          class="mb-6 flex w-full items-center border-blue-50 px-6 pb-6 lg:border-b"
        >
          <a class="text-xl font-semibold" href="#">
            <img
              class="h-8"
              src="assets/logos/artemis-logo-light.svg"
              alt=""
              width="auto"
            />
          </a>
        </div>
        <div class="px-4 pb-6 overflow-y-auto">
          <h3 class="mb-2 text-xs font-medium uppercase text-gray-200">Main</h3>
          <ul class="mb-8 text-sm font-medium">
            <li>
              <a
                class="flex items-center rounded bg-indigo-500 py-3 pl-3 pr-4 text-white"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon name="dashboard" svgClass="h-5 w-5 text-gray-200">
                  </svg-icon>
                </span>
                <span>Dashboard</span>
                <span class="ml-auto inline-block">
                  <svg-icon name="down-arrow" svgClass="h-3 w-3 text-gray-400">
                  </svg-icon>
                </span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-2 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon name="discover" svgClass="h-5 w-5 text-gray-200">
                  </svg-icon>
                </span>
                <span>Discover</span>
                <span
                  class="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs text-white"
                  >4</span
                >
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon name="users" svgClass="h-5 w-5 text-gray-200">
                  </svg-icon>
                </span>
                <span>Users</span>
                <span class="ml-auto inline-block">
                  <svg-icon name="down-arrow" svgClass="h-3 w-3 text-gray-400">
                  </svg-icon>
                </span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon name="documents" svgClass="h-5 w-5 text-gray-200">
                  </svg-icon>
                </span>
                <span>Documents</span>
                <span class="ml-auto inline-block">
                  <svg-icon name="down-arrow" svgClass="h-3 w-3 text-gray-400">
                  </svg-icon>
                </span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon
                    name="applications"
                    svgClass="h-5 w-5 text-gray-200"
                  >
                  </svg-icon>
                </span>
                <span>Applications</span>
                <span class="ml-auto inline-block">
                  <svg-icon name="down-arrow" svgClass="h-3 w-3 text-gray-400">
                  </svg-icon>
                </span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon name="pages" svgClass="h-5 w-5 text-gray-200">
                  </svg-icon>
                </span>
                <span>Pages</span>
                <span class="ml-auto inline-block">
                  <svg-icon name="down-arrow" svgClass="h-3 w-3 text-gray-400">
                  </svg-icon>
                </span>
              </a>
            </li>
          </ul>
          <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
            Secondary
          </h3>
          <ul class="text-sm font-medium">
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-2 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon
                    name="support-center"
                    svgClass="h-5 w-5 text-gray-200"
                  >
                  </svg-icon>
                </span>
                <span>Support Center</span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon name="inbox" svgClass="h-5 w-5 text-gray-200">
                  </svg-icon>
                </span>
                <span>Inbox</span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon
                    name="file-manager"
                    svgClass="h-5 w-5 text-gray-200"
                  >
                  </svg-icon>
                </span>
                <span>File Manager</span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center rounded py-3 pl-3 pr-4 text-gray-500 hover:bg-indigo-50"
                href="#"
              >
                <span class="mr-3 inline-block">
                  <svg-icon name="data-list" svgClass="h-5 w-5 text-gray-200">
                  </svg-icon>
                </span>
                <span>Data List</span>
              </a>
            </li>
          </ul>
          <div class="pt-8">
            <a
              class="flex items-center rounded py-3 pl-3 pr-2 text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              <span class="mr-4 inline-block">
                <svg-icon name="settings" svgClass="h-5 w-5 text-gray-200">
                </svg-icon>
              </span>
              <span>Settings</span>
            </a>
            <a
              class="flex items-center rounded py-3 pl-3 pr-2 text-gray-500 hover:bg-indigo-50"
              href="#"
            >
              <span class="mr-4 inline-block">
                <svg-icon name="log-out" svgClass="h-5 w-5 text-gray-200">
                </svg-icon>
              </span>
              <span>Log Out</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div class="mx-auto lg:ml-80">
      <section class="bg-white py-5 px-6 shadow">
        <nav class="relative">
          <div class="flex items-center">
            <div class="mr-auto flex items-center">
              <a class="flex items-center text-sm hover:text-gray-800" href="#">
                <span class="mr-2 inline-block">
                  <svg-icon name="start" svgClass="h-5 w-5 text-indigo-500">
                  </svg-icon>
                </span>
                <span>Start</span>
              </a>
              <span class="mx-3 inline-block">
                <svg
                  class="text-indigo-500"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.23242 9.3689C1.06762 9.36887 0.906542 9.31997 0.769534 9.2284C0.632526 9.13683 0.525742 9.0067 0.462684 8.85445C0.399625 8.7022 0.383124 8.53467 0.415263 8.37304C0.447403 8.21141 0.526741 8.06294 0.643249 7.9464L3.58916 5L0.643224 2.05364C0.486959 1.89737 0.399171 1.68543 0.39917 1.46444C0.399169 1.24345 0.486957 1.03151 0.64322 0.875248C0.799483 0.718984 1.01142 0.631195 1.23241 0.631194C1.4534 0.631193 1.66534 0.718981 1.82161 0.875244L5.35676 4.41084C5.43416 4.48819 5.49556 4.58004 5.53745 4.68114C5.57934 4.78224 5.6009 4.89059 5.6009 5.00003C5.6009 5.10946 5.57934 5.21782 5.53745 5.31891C5.49556 5.42001 5.43416 5.51186 5.35676 5.58922L1.82161 9.12478C1.74432 9.20228 1.65249 9.26375 1.55137 9.30564C1.45026 9.34754 1.34186 9.36903 1.23242 9.3689Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <a class="flex items-center text-sm hover:text-gray-800" href="#">
                <span class="mr-2 inline-block">
                  <svg
                    class="text-indigo-500"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.09179 13.575C3.01254 13.4991 2.91908 13.4397 2.81679 13.4C2.6139 13.3167 2.38634 13.3167 2.18346 13.4C2.08116 13.4397 1.98771 13.4991 1.90846 13.575C1.83259 13.6543 1.77312 13.7477 1.73346 13.85C1.66964 14.0018 1.6522 14.169 1.68335 14.3307C1.71449 14.4923 1.79282 14.6411 1.90846 14.7583C1.98946 14.8319 2.08247 14.8911 2.18346 14.9333C2.28321 14.9774 2.39106 15.0002 2.50012 15.0002C2.60918 15.0002 2.71704 14.9774 2.81679 14.9333C2.91778 14.8911 3.01079 14.8319 3.09179 14.7583C3.20742 14.6411 3.28575 14.4923 3.3169 14.3307C3.34804 14.169 3.33061 14.0018 3.26679 13.85C3.22713 13.7477 3.16766 13.6543 3.09179 13.575ZM5.83346 6.66667H17.5001C17.7211 6.66667 17.9331 6.57887 18.0894 6.42259C18.2457 6.26631 18.3335 6.05435 18.3335 5.83333C18.3335 5.61232 18.2457 5.40036 18.0894 5.24408C17.9331 5.0878 17.7211 5 17.5001 5H5.83346C5.61244 5 5.40048 5.0878 5.2442 5.24408C5.08792 5.40036 5.00012 5.61232 5.00012 5.83333C5.00012 6.05435 5.08792 6.26631 5.2442 6.42259C5.40048 6.57887 5.61244 6.66667 5.83346 6.66667ZM3.09179 9.40833C2.9746 9.2927 2.82579 9.21437 2.66413 9.18323C2.50248 9.15208 2.33521 9.16952 2.18346 9.23333C2.08247 9.27554 1.98946 9.33472 1.90846 9.40833C1.83259 9.48759 1.77312 9.58104 1.73346 9.68333C1.68937 9.78308 1.6666 9.89094 1.6666 10C1.6666 10.1091 1.68937 10.2169 1.73346 10.3167C1.77566 10.4177 1.83485 10.5107 1.90846 10.5917C1.98946 10.6653 2.08247 10.7245 2.18346 10.7667C2.28321 10.8108 2.39106 10.8335 2.50012 10.8335C2.60918 10.8335 2.71704 10.8108 2.81679 10.7667C2.91778 10.7245 3.01079 10.6653 3.09179 10.5917C3.1654 10.5107 3.22459 10.4177 3.26679 10.3167C3.31088 10.2169 3.33365 10.1091 3.33365 10C3.33365 9.89094 3.31088 9.78308 3.26679 9.68333C3.22713 9.58104 3.16766 9.48759 3.09179 9.40833ZM17.5001 9.16667H5.83346C5.61244 9.16667 5.40048 9.25446 5.2442 9.41074C5.08792 9.56703 5.00012 9.77899 5.00012 10C5.00012 10.221 5.08792 10.433 5.2442 10.5893C5.40048 10.7455 5.61244 10.8333 5.83346 10.8333H17.5001C17.7211 10.8333 17.9331 10.7455 18.0894 10.5893C18.2457 10.433 18.3335 10.221 18.3335 10C18.3335 9.77899 18.2457 9.56703 18.0894 9.41074C17.9331 9.25446 17.7211 9.16667 17.5001 9.16667ZM3.09179 5.24167C3.01254 5.1658 2.91908 5.10633 2.81679 5.06667C2.66503 5.00285 2.49777 4.98542 2.33611 5.01656C2.17445 5.04771 2.02564 5.12604 1.90846 5.24167C1.83485 5.32267 1.77566 5.41568 1.73346 5.51667C1.68937 5.61642 1.6666 5.72427 1.6666 5.83333C1.6666 5.94239 1.68937 6.05025 1.73346 6.15C1.77566 6.25099 1.83485 6.344 1.90846 6.425C1.98946 6.49861 2.08247 6.5578 2.18346 6.6C2.33521 6.66382 2.50248 6.68125 2.66413 6.65011C2.82579 6.61896 2.9746 6.54063 3.09179 6.425C3.1654 6.344 3.22459 6.25099 3.26679 6.15C3.31088 6.05025 3.33365 5.94239 3.33365 5.83333C3.33365 5.72427 3.31088 5.61642 3.26679 5.51667C3.22459 5.41568 3.1654 5.32267 3.09179 5.24167ZM17.5001 13.3333H5.83346C5.61244 13.3333 5.40048 13.4211 5.2442 13.5774C5.08792 13.7337 5.00012 13.9457 5.00012 14.1667C5.00012 14.3877 5.08792 14.5996 5.2442 14.7559C5.40048 14.9122 5.61244 15 5.83346 15H17.5001C17.7211 15 17.9331 14.9122 18.0894 14.7559C18.2457 14.5996 18.3335 14.3877 18.3335 14.1667C18.3335 13.9457 18.2457 13.7337 18.0894 13.5774C17.9331 13.4211 17.7211 13.3333 17.5001 13.3333Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Main Tasks</span>
              </a>
            </div>
            <div class="lg:hidden">
              <button class="flex items-center">
                <svg
                  class="block h-8 w-8 rounded bg-indigo-100 p-2 text-indigo-500"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul class="mr-6 hidden items-center space-x-6 lg:flex">
              <li>
                <a class="text-gray-200 hover:text-gray-300" href="#">
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a class="text-gray-200 hover:text-gray-300" href="#">
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V14C0 14.7956 0.316071 15.5587 0.87868 16.1213C1.44129 16.6839 2.20435 17 3 17H5.59L8.29 19.71C8.38344 19.8027 8.49426 19.876 8.61609 19.9258C8.73793 19.9755 8.86839 20.0008 9 20C9.23834 20 9.46886 19.9149 9.65 19.76L12.87 17H15C15.7956 17 16.5587 16.6839 17.1213 16.1213C17.6839 15.5587 18 14.7956 18 14V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8946 15.2652 15 15 15H12.5C12.2617 15 12.0311 15.0851 11.85 15.24L9.05 17.64L6.71 15.29C6.61656 15.1973 6.50574 15.124 6.38391 15.0742C6.26207 15.0245 6.13161 14.9992 6 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V14Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a class="text-gray-200 hover:text-gray-300" href="#">
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div class="hidden lg:block">
              <button class="flex items-center">
                <div class="mr-3">
                  <p class="text-sm">Thomas Brown</p>
                  <p class="text-sm text-gray-500">Developer</p>
                </div>
                <div class="mr-2">
                  <img
                    class="h-10 w-10 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                </div>
                <span>
                  <svg
                    class="text-gray-400"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </div>
  `,
  styles: [],
})
export class DashboardComponent {}
