# **WriteItUp - Share Your Voice with the World**

WriteItUp is a sleek and modern blogging platform designed to make writing and sharing content simple and enjoyable. Whether you're a casual writer or an avid blogger, WriteItUp offers all the tools you need to share your thoughts with the world.

---

## **Features**

- **Easy Posting:** Create, edit, and delete blog posts effortlessly.
- **User Accounts:** Secure login/signup for personalized content management.
- **Content Control:** Posts can only be edited or deleted by their creators.
- **Responsive Design:** Fully optimized for all devices, ensuring seamless browsing.

---

## **Technologies Used**

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Backend:** Appwrite
- **Authentication:** Secure login/signup system using Appwrite.

---


## Challenges 
### 1. Handling Tailwind Styles with TinyMCE Content  

In this project, I encountered an issue where **Tailwind's default styles** were overriding the content created in **TinyMCE**, causing it to appear inconsistent. To fix this, I used the **`@tailwindcss/typography`** plugin and applied the **`prose`** class. This class ensures proper styling for headings, paragraphs, lists, and other rich-text elements, allowing the content to display exactly as intended.
