const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
});

function getRawDataOfOrganization() {
  return organization._data;
}
function getOrganization() {
  return organization;
}

class Organization {
  constructor(data) {
    this._data = data;
  }

  set name(aString) {
    this._data.name = aString;
  }
}

// 参照時
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

// 更新時
getOrganization().name = newName;
