const Header = {
  render: () => `
        <div class="brand">
              <a href="/#/">Logo</a>
              </div>
              <div>
              <div class="wrap">
                  <div class="search">
                      <input type="text" class="searchTerm" placeholder="What are you looking for?">
                      <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            <div>
              <a href="/#/cart">Carrito</a>
          </div>
        `,
  after_render: () => {},
};

export default Header;
