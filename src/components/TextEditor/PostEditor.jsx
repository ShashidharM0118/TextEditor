import React, { useState, useRef, useEffect } from 'react';
import ProfileBar from './ProfileBar';
import { Bold, Italic, Strikethrough, Link2, Smile, Copy, Image, X, Plus } from 'lucide-react';
import Footer from './Footer';
import AIAssistantMenu from './AIAssistantMenu';


const PostEditor = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showHeadlineMenu, setShowHeadlineMenu] = useState(false);
  const [headlinePosition, setHeadlinePosition] = useState({ x: 0, y: 0 });
  const [showPlusButton, setShowPlusButton] = useState(false);
  const [plusButtonPosition, setPlusButtonPosition] = useState({ x: 0, y: 0 });
  const editorRef = useRef(null);
  const tooltipRef = useRef(null);
  const headlineMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
      if (headlineMenuRef.current && !headlineMenuRef.current.contains(event.target)) {
        setShowHeadlineMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  const isLineEmpty = (node) => {
    return (
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() === '' ||
      (node.nodeType === Node.ELEMENT_NODE && 
       (node.tagName === 'BR' || node.textContent.trim() === ''))
    );
  };


  const handleCaretChange = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    const currentLine = startContainer.nodeType === Node.TEXT_NODE 
      ? startContainer.parentNode 
      : startContainer;

    if (range.startOffset === 0 && isLineEmpty(currentLine)) {
      const rect = currentLine.getBoundingClientRect();
      const editorRect = editorRef.current.getBoundingClientRect();

      setPlusButtonPosition({
        x: editorRect.left , // Adjusted x position for better alignment
        y: rect.top + 15 // Relative positioning
      });
      setShowPlusButton(true);
    } else {
      setShowPlusButton(false);
    }
  };

  const insertHeadline = (tag) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const newHeadline = document.createElement(tag);
    
    // Remove existing formatting if any
    const currentBlock = range.startContainer.parentElement;
    if (currentBlock !== editorRef.current) {
      // Replace the current block with our new headline
      currentBlock.parentNode.replaceChild(newHeadline, currentBlock);
    } else {
      range.insertNode(newHeadline);
    }

    // Add a zero-width space to maintain height if empty
    newHeadline.appendChild(document.createTextNode('\u200B'));
    
    // Apply proper styling based on heading type
    switch(tag) {
      case 'h1':
        newHeadline.style.fontSize = '2em';
        newHeadline.style.fontWeight = 'bold';
        newHeadline.style.marginBottom = '0.5em';
        break;
      case 'h2':
        newHeadline.style.fontSize = '1.5em';
        newHeadline.style.fontWeight = 'bold';
        newHeadline.style.marginBottom = '0.5em';
        break;
      case 'h3':
        newHeadline.style.fontSize = '1.17em';
        newHeadline.style.fontWeight = 'bold';
        newHeadline.style.marginBottom = '0.5em';
        break;
      case 'p':
        newHeadline.style.fontSize = '1em';
        newHeadline.style.marginBottom = '0.5em';
        break;
    }
    
    // Position cursor inside the new headline
    const newRange = document.createRange();
    newRange.setStart(newHeadline, 0);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
    
    setShowHeadlineMenu(false);
    editorRef.current.focus();
  };

  const HeadlineMenu = () => (
    <div
      ref={headlineMenuRef}
      className="fixed bg-white shadow-lg border border-gray-200 rounded-lg py-2 z-50"
      style={{
        top: headlinePosition.y,
        left: headlinePosition.x, // Adjusted position
        minWidth: '20px'
      }}
    >
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-2xl font-bold"
        onClick={() => insertHeadline('h1')}
      >
        Heading 1
      </button>
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-xl font-bold"
        onClick={() => insertHeadline('h2')}
      >
        Heading 2
      </button>
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-lg font-bold"
        onClick={() => insertHeadline('h3')}
      >
        Heading 3
      </button>
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100"
        onClick={() => insertHeadline('p')}
      >
        Normal text
      </button>
    </div>
  );

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + window.scrollX + (rect.width / 2),
        y: rect.top + window.scrollY - 40
      });
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  const SelectionTooltip = () => (
    <div
      ref={tooltipRef}
      className="fixed bg-white shadow-lg rounded-full py-1 px-2 z-50 flex items-center gap-2"
      style={{
        top: tooltipPosition.y,
        left: tooltipPosition.x,
        transform: 'translateX(-50%)',
        border: '1px solid #e5e7eb'
      }}
    >
      <button 
        className="p-1 hover:bg-gray-100 rounded transition-colors"
        onClick={() => formatText('bold')}
      >
        <Bold size={16} />
      </button>
      <button 
        className="p-1 hover:bg-gray-100 rounded transition-colors"
        onClick={() => formatText('italic')}
      >
        <Italic size={16} />
      </button>
      <button
        className="p-1 hover:bg-gray-100 rounded transition-colors"
        onClick={() => formatText('underline')}
      >
        <span className="font-bold underline">U</span>
      </button>
      <button 
        className="p-1 hover:bg-gray-100 rounded transition-colors"
        onClick={() => {
          const selection = window.getSelection();
          const range = selection.getRangeAt(0);
          const text = range.toString();
          formatText('removeFormat');
          range.deleteContents();
          range.insertNode(document.createTextNode(text));
          selection.removeAllRanges();
          selection.addRange(range);
        }}
      >
        <span className="font-bold">T</span>
      </button>
      <button 
        className="p-1 hover:bg-gray-100 rounded transition-colors"
        onClick={() => {
          const url = prompt('Enter link URL:');
          if (url) formatText('createLink', url);
        }}
      >
        <Link2 size={16} />
      </button>
      <button
        className="p-1 hover:bg-gray-100 rounded transition-colors ml-1"
        onClick={() => setShowTooltip(false)}
      >
        <X size={16} />
      </button>
    </div>
  );

  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key.toLowerCase()) {
        case 'b':
          e.preventDefault();
          formatText('bold');
          break;
        case 'i':
          e.preventDefault();
          formatText('italic');
          break;
        case 'u':
          e.preventDefault();
          formatText('underline');
          break;
        case 'k':
          e.preventDefault();
          const url = prompt('Enter link URL:');
          if (url) formatText('createLink', url);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="flex flex-col w-full p-4">
      <ProfileBar className="h-14 border-b border-gray-200 bg-white" />
      
      <div className="flex items-center justify-between border-b pb-2">
        <div className="flex gap-2">
          <button 
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => formatText('bold')}
            title="Bold (Ctrl+B)"
          >
            <Bold size={16} />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => formatText('italic')}
            title="Italic (Ctrl+I)"
          >
            <Italic size={16} />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => formatText('strikeThrough')}
            title="Strikethrough"
          >
            <Strikethrough size={16} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <Smile size={16} />
          </button>
          <AIAssistantMenu/>
        </div>
        <div className="flex space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <Copy size={16} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <Image size={16} />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => {
              const url = prompt('Enter link URL:');
              if (url) formatText('createLink', url);
            }}
            title="Insert Link (Ctrl+K)"
          >
            <Link2 size={16} />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={editorRef}
          contentEditable
          onKeyDown={handleKeyDown}
          onMouseUp={() => {
            handleSelectionChange();
            handleCaretChange();
          }}
          onKeyUp={() => {
            handleSelectionChange();
            handleCaretChange();
          }}
          onClick={handleCaretChange}
          className="mt-4 w-full p-2 rounded min-h-[350px] overflow-auto outline-none"
          style={{ minHeight: '400px' }}
        />
        
        {showPlusButton && (
          <button
            className="absolute w-6 h-6 -left-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-blue-500 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setHeadlinePosition({
                x: e.pageX,
                y: e.pageY
              });
              setShowHeadlineMenu(true);
            }}
            style={{
              top: plusButtonPosition.y - editorRef.current.getBoundingClientRect().top
            }}
          >
            <Plus size={20} />
          </button>
        )}
        
        {showHeadlineMenu && <HeadlineMenu />}
        {showTooltip && <SelectionTooltip />}
      </div>
      
      <Footer />
    </div>
  );
};

export default PostEditor;