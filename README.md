
# Proof of Age

Simple ZKP application which estimates a persons age using AI and generates a proof if the person is adult or not.

## Technical Details
The scheme represents a high-level architecture for a Zero Knowledge Proof (ZKP) based age verification project using estimated age for the picture of the user. The image data is then fed into a machine learning model, represented by the "Age Estimation Model" box. This model uses deep learning algorithms to analyze the image and predict the age of the person in the picture. The next step is to generate a Zero Knowledge Proof (ZKP), which is a cryptographic method that allows one party to prove to another that they have certain knowledge, without revealing the knowledge itself. In this case, the ZKP is generated based on the predicted age of the person in the image. The ZKP is represented by the "ZKP Generation" box in the diagram. The ZKP is then sent to the "ZKP Verifier", which is responsible for verifying the proof without learning any information about the age of the person. This is the key component that ensures the privacy of the user's data, as the verifier only receives the proof without accessing the actual age of the person.


## FAQ
Q: What is a ZKP-based proof of age project?<br />
A: A ZKP-based proof of age project is an application that uses zero-knowledge proofs (ZKPs) to verify a person's age without revealing any additional information about the person.

Q: How does a ZKP-based proof of age project work?<br />
 A: A ZKP-based proof of age project uses ZKPs to prove that a person is of a certain age without revealing the person's exact age or any other personal information. 

Q: What are the benefits of using ZKP-based proof of age project? <br />
A: The benefits of using a ZKP-based proof of age project are that it allows for age verification without revealing personal information, which can protect the privacy of individuals. Additionally, it can streamline the process of age verification and reduce the risk of identity fraud.

Q: What are some potential use cases for a ZKP-based proof of age project? <br />
A: A ZKP-based proof of age project could be useful for age verification in various contexts, such as online transactions, purchases of age-restricted products. It could also be useful for verifying the age of individuals who are too young to have government-issued identification, such as minors.

Q: What are some of the limitations of a ZKP-based proof of age project? <br />
A: Some of the limitations of a ZKP-based proof of age project include the potential for errors in the verification process and the need for participants to have access to the necessary technology to participate in the verification process. Additionally, there may be legal and regulatory barriers to the implementation of such projects, depending on the jurisdiction.

Q: How is the privacy of the individuals involved in a ZKP-based proof of age project protected? <br />
A: The privacy of individuals involved in a ZKP-based proof of age project is protected through the use of ZKPs, which enable the verification of age without revealing any additional information about the person. The project may also use techniques such as encryption and hashing to ensure the security of the data.

Q: What are some reasons why API calls are made to multiple AI providers?<br />
A: API calls may be made to multiple AI providers for a variety of reasons, including: Leveraging diverse capabilities, Ensuring redundancy, Maximizing accuracy, Minimizing costs, Scaling to handle large workloads