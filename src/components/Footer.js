
const Footer = () => {
    return (
      <footer
        class="text-gray-600 body-font
      "
      >
        <div
          class="bg-gray-100 pl-4 pr-4
         lg:pl-10 lg:pr-10
        "
        >
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Saurav Hathi —
              <a
                href="https://github.com/sauravhathi"
                class="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @sauravhathi
              </a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              <a href="https://www.youtube.com/c/sauravhathi">
              YouTube
              </a>
            </span>
          </div>
        </div>
      </footer>
    );
};

export default Footer