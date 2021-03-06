/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const privateKeyRegExp = new RegExp("^([0-9A-Fa-f]{2}){32}$");
const publicKeyRegExp = new RegExp("^([0-9A-Fa-f]{2}){32}$");
const namespaceRegExp = new RegExp("^([0-9a-z_\-]{1,64})$");
const namespaceFullNameRegExp = new RegExp("^([0-9a-z_\-]{1,64})(\\.[0-9a-z_\-]{1,64}){0,2}$");
const subNamespaceRegExp = new RegExp("^([0-9a-z_\-]{1,64})(\\.[0-9a-z_\-]{1,64}){1,2}$");
const mosaicFullNameRegExp = new RegExp("^([0-9a-z_\-]{1,64})((\\.([0-9a-z_\-]{1,64})){0,2})(:[0-9a-z_\-]{1,64}){1}$");
const mosaicRegExp = new RegExp("^([0-9a-z_\-]{1,64})$");
const messageRegExp = new RegExp("^.{0,1024}$");
const addressRegExp = new RegExp("^([0-9a-zA-Z]){40}$|^((([0-9a-zA-Z\-]){7}){6}([0-9a-zA-Z]){4}){1}$");
const hostRegExp = new RegExp("^((http|https):\/\/)[-a-zA-Z0-9@%.\/_\+~#=]+[:]{1}[0-9]+$");

module.exports = {
    privateKeyRegExp,
    publicKeyRegExp,
    namespaceRegExp,
    namespaceFullNameRegExp,
    subNamespaceRegExp,
    mosaicRegExp,
    mosaicFullNameRegExp,
    messageRegExp,
    addressRegExp,
    hostRegExp,

    privateKeyValidate: function (privateKey) { return privateKeyRegExp.test(privateKey); },
    publicKeyValidate: function (publicKey) { return publicKeyRegExp.test(publicKey); },
    namespaceValidate: function (namespace) { return namespaceRegExp.test(namespace); },
    namespaceFullNameValidate: function (namespaceFullName) { return namespaceFullNameRegExp.test(namespaceFullName); },
    subNamespaceValidate: function (subNamespace) { return subNamespaceRegExp.test(subNamespace); },
    mosaicValidate: function (mosaic) { return mosaicRegExp.test(mosaic) },
    mosaicFullNameValidate: function (mosaicFullName) { return mosaicFullNameRegExp.test(mosaicFullName); },
    addressValidate: function (address) { return addressRegExp.test(address); },
    hostValidate: function (host) { return hostRegExp.test(host); }
}