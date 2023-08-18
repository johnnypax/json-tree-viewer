# JSON Tree Viewer
A simple interactive JSON Tree Viewer implemented with HTML, CSS, and jQuery.

## Features
- Visualizes JSON objects and arrays in a tree view structure.
- Interactive toggling of children nodes.
- FontAwesome icons indicating the type of data: arrays, objects, and properties.

## Setup
Ensure you have jQuery and FontAwesome included in your project. You can use CDNs or install them via npm or other package managers.
It uses AJAX for the JSON reading, it does not works is is not deployed on a live server.

If you want to try, download Visual Studio Code and install the external plugin "Live Server", once installed select the index.html file, right click and select "open with live server".

## How it works
Load your JSON data either from an external file or define it directly in the script.
Call the traverse() function, passing the JSON data and the root ul element as arguments.
The tree view will be generated and displayed.


Click on [Archety.dev](https://archety.dev/non-categorizzato/visualizzatore-interattivo-di-json-una-guida-pratica/) for more informations.

# Disclaimer

The code provided in this repository is offered "as-is" and without any warranties or guarantees of fitness for a specific purpose. While efforts have been made to ensure accuracy and functionality, it is important to acknowledge the following points before utilizing the code:

No Warranty: The code is provided without warranty of any kind, either expressed or implied, including but not limited to, the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the code is with the user.

Use at Your Own Risk: The code has been created to demonstrate a specific concept or functionality. It may not be suitable for all environments or applications. Users are advised to thoroughly review, test, and customize the code to meet their own requirements and standards.

No Support: The authors and contributors of the code may not be available for support or assistance. While efforts may be made to address issues or questions, there is no guarantee of timely response or resolution.

Liability Limitation: In no event shall the authors or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this code, even if advised of the possibility of such damage.

Security Considerations: It is the responsibility of the user to assess and implement appropriate security measures when using or deploying the code. Code from external sources should be reviewed for potential vulnerabilities before being integrated into production systems.

By using the code provided in this repository, you acknowledge that you have read, understood, and agreed to these terms. You are encouraged to exercise caution and due diligence in your utilization of the code for your specific purposes.
